import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const NodeEditor = ({ nodeKey, texts, isUpperChart, setTexts, onClose }) => {
    const [newTexts, setNewTexts] = useState({});

    // Atualiza os valores ao editar
    const handleChange = (field, value) => {
        setNewTexts((prev) => ({ ...prev, [field]: value }));
    };

    // Salvar edições no Supabase
    async function saveChanges() {
        if (!nodeKey) {
            console.error("❌ ERRO: nodeKey não foi definido.");
            return;
        }
    
        const updates = {
            why_important: newTexts.whyImportant || texts.whyImportant,
            who_does: isUpperChart ? (newTexts.whoDoes || texts.whoDoes) : null,
            how_does: isUpperChart ? null : (newTexts.howDoes || texts.howDoes),
        };
    
        console.log("📡 Verificando se node_key existe no banco:", nodeKey);
    
        // 🔹 Primeiro, verificamos se o registro já existe
        let { data: existingData, error: fetchError } = await supabase
            .from('flowchart_texts')
            .select('node_key')
            .eq('node_key', nodeKey)
            .single();
    
        if (fetchError) {
            console.warn(`⚠️ Nenhum registro encontrado para node_key: ${nodeKey}. Criando um novo.`);
            // 🔹 Se não encontrou, cria um novo registro
            const { error: insertError } = await supabase
                .from('flowchart_texts')
                .insert([{ node_key: nodeKey, ...updates }]);
    
            if (insertError) {
                console.error("❌ ERRO AO INSERIR NOVO REGISTRO:", insertError.message);
                return;
            }
    
            console.log("✅ Novo registro criado com sucesso!");
        } else {
            console.log("✅ Registro encontrado! Atualizando...");
    
            // 🔹 Se o registro já existe, apenas atualiza
            const { error: updateError } = await supabase
                .from('flowchart_texts')
                .update(updates)
                .eq('node_key', nodeKey);
    
            if (updateError) {
                console.error("❌ ERRO AO ATUALIZAR REGISTRO:", updateError.message);
                return;
            }
    
            console.log("✅ Dados atualizados com sucesso!");
        }
    
        setTexts(updates);
        onClose();
    }
    

    return (
        <div className="edit-section">
            <label>Por que importa?</label>
            <textarea
                value={newTexts.whyImportant || texts.whyImportant}
                onChange={(e) => handleChange("whyImportant", e.target.value)}
                placeholder="Digite aqui seu texto com formatação..."
                style={{ minHeight: "150px", fontSize: "16px", whiteSpace: "pre-wrap" }}
            />

            {isUpperChart ? (
                <>
                    <label>Quem faz?</label>
                    <input
                        type="text"
                        value={newTexts.whoDoes || texts.whoDoes}
                        onChange={(e) => handleChange("whoDoes", e.target.value)}
                        placeholder="Digite aqui quem faz..."
                    />
                </>
            ) : (
                <>
                    <label>Como faz?</label>
                    <textarea
                        value={newTexts.howDoes || texts.howDoes}
                        onChange={(e) => handleChange("howDoes", e.target.value)}
                        placeholder="Digite aqui como faz..."
                        style={{ minHeight: "150px", fontSize: "16px", whiteSpace: "pre-wrap" }}
                    />
                </>
            )}

            {/* Botões de salvar e cancelar */}
            <button className="modal-button save" onClick={saveChanges}>
                Salvar
            </button>
            <button className="modal-button cancel" onClick={onClose}>
                Cancelar
            </button>
        </div>
    );
};

export default NodeEditor;
