import React from 'react';

const NodeButtons = ({ texts, isUpperChart, onEdit, onDisplay }) => {
    return (
        <>
            <button className="modal-button" onClick={() => onDisplay("Por que importa?", texts.whyImportant)}>
                Por que importa?
            </button>

            <button className="modal-button" onClick={() => onDisplay("Quem faz?", texts.whoDoes)}>
                Quem faz?
            </button>

            {!isUpperChart && ( // 🔹 "Como faz?" só aparece na Lower Chart
                <button className="modal-button" onClick={() => onDisplay("Como faz?", texts.howDoes)}>
                    Como faz?
                </button>
            )}

            <button className="modal-button edit" onClick={onEdit}>
                Gerenciar
            </button>
        </>
    );
};



export default NodeButtons;
