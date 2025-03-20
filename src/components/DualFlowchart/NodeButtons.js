import React from 'react';

const NodeButtons = ({ texts, isUpperChart, onEdit, onDisplay }) => {
    return (
        <>
            <button className="modal-button" onClick={() => onDisplay("De que se trata esse serviço?", texts.whyImportant)}>
                De que se trata esse serviço?
            </button>

            <button className="modal-button" onClick={() => onDisplay("Quem faz esse serviço?", texts.whoDoes)}>
                Quem faz esse serviço?
            </button>

            {!isUpperChart && ( // 🔹 "Como esse serviço é feito?" só aparece na Lower Chart
                <button className="modal-button" onClick={() => onDisplay("Sugestão para testes", texts.howDoes)}>
                    Sugestão para Testes
                </button>
            )}

            <button className="modal-button edit" onClick={onEdit}>
                Gerenciar
            </button>
        </>
    );
};

export default NodeButtons;
