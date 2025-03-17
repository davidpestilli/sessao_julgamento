import React from 'react';

const NodeButtons = ({ texts, isUpperChart, onEdit, onDisplay }) => {
    return (
        <>
            <button className="modal-button" onClick={() => onDisplay("Por que esse serviço importa?", texts.whyImportant)}>
                Por que esse serviço importa?
            </button>

            <button className="modal-button" onClick={() => onDisplay("Quem faz esse serviço?", texts.whoDoes)}>
                Quem faz esse serviço?
            </button>

            {!isUpperChart && ( // 🔹 "Como esse serviço é feito?" só aparece na Lower Chart
                <button className="modal-button" onClick={() => onDisplay("Como esse serviço é feito?", texts.howDoes)}>
                    Como esse serviço é feito?
                </button>
            )}

            <button className="modal-button edit" onClick={onEdit}>
                Gerenciar
            </button>
        </>
    );
};

export default NodeButtons;
