import React from 'react';

function PopupWithForm({name, isOpen, onClose, title, children, submitName, onSubmit}) {
    return (
      <aside className={`popup ${isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <button className="popup__close-button" type="button" onClick={onClose}></button>
          <form className="popup__form" 
                name={name} 
                noValidate
                onSubmit={onSubmit}>
            <h3 className="popup__title">{title}</h3>
            {children}
            <button type="submit" 
                    className="popup__button">{submitName}</button>
          </form>
        </div>
      </aside>
  );
}
  
export default PopupWithForm;
