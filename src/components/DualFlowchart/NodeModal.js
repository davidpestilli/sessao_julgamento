import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import NodeButtons from './NodeButtons';
import NodeEditor from './NodeEditor';
import DisplayModal from './DisplayModal';
import './NodeModal.css';

const NodeModal = ({ isOpen, onClose, nodeKey, content, isUpperChart }) => {
    const [texts, setTexts] = useState({
        whyImportant: "Carregando...",
        whoDoes: "Carregando...",
        howDoes: "Carregando..."
    });

    const [isEditing, setIsEditing] = useState(false);
    const [displayModal, setDisplayModal] = useState({ isOpen: false, title: "", content: "" });

    // 🔹 Resetar modo de edição sempre que um novo nó for clicado
    useEffect(() => {
        if (isOpen) {
            setIsEditing(false); // 🔹 Garante que o modal sempre abre no modo de seleção de botões
        }
    }, [isOpen]);

    // Buscar dados do Supabase quando o modal abrir
    useEffect(() => {
        async function fetchNodeText() {
            if (!nodeKey) return;

            console.log(`🔍 Buscando dados para node_key: ${nodeKey}`);

            let { data, error } = await supabase
                .from('flowchart_texts')
                .select('*')
                .eq('node_key', nodeKey)
                .limit(1)
                .maybeSingle();

            if (error) {
                console.error("❌ Erro ao buscar dados do nó:", error.message);
                setTexts({
                    whyImportant: "Erro ao carregar conteúdo",
                    whoDoes: "Erro ao carregar conteúdo",
                    howDoes: "Erro ao carregar conteúdo"
                });
                return;
            }

            if (!data) {
                console.warn(`⚠️ Nenhum dado encontrado para nodeKey: ${nodeKey}`);
                setTexts({
                    whyImportant: "Sem conteúdo disponível",
                    whoDoes: "Sem conteúdo disponível",
                    howDoes: "Sem conteúdo disponível"
                });
                return;
            }

            console.log("✅ Dados carregados do Supabase:", data);

            setTexts({
                whyImportant: data.why_important ?? "Sem conteúdo",
                whoDoes: data.who_does ?? "Sem conteúdo",
                howDoes: data.how_does ?? "Sem conteúdo"
            });
        }

        fetchNodeText();
    }, [nodeKey]);

    const handleOpenDisplayModal = (title, content) => {
        setDisplayModal({ isOpen: true, title, content });
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>×</button>
                    <h2 className="modal-title">{content || "Nó não identificado"}</h2>

                    {!isEditing ? (
                        <NodeButtons 
                            texts={texts}
                            isUpperChart={isUpperChart}
                            onEdit={() => setIsEditing(true)}
                            onDisplay={handleOpenDisplayModal} // Abre o modal de exibição
                        />
                    ) : (
                        <NodeEditor 
                            nodeKey={nodeKey}
                            texts={texts}
                            isUpperChart={isUpperChart}
                            setTexts={setTexts}
                            onClose={() => setIsEditing(false)}
                        />
                    )}
                </div>
            </div>

            {/* Novo modal para exibir informações ao clicar em um botão */}
            <DisplayModal 
                isOpen={displayModal.isOpen}
                onClose={() => setDisplayModal({ isOpen: false, title: "", content: "" })}
                title={displayModal.title}
                content={displayModal.content}
            />
        </>
    );
};

export default NodeModal;
