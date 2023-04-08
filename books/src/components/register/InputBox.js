

export const InputBox=({
      inputType,
      onBlurHendler,
      onFormChange,
      formErrors,
      formValues,
      type,
      icon,
      placeholder
})=>{

      return (
            <div className="input-container">
            <label
              htmlFor={inputType}
              className={`form-label ${
                formErrors[inputType] && "form-label-error"
              }`}
            >
                  {icon}
            </label>
            <input
              type={type}
              name={inputType}
              id={inputType}
              className={`form-input ${
                formErrors[inputType] && "form-input-error"
              }`}
              placeholder={placeholder}
              value={formValues[inputType]}
              onChange={onFormChange}
              onBlur={onBlurHendler}
            />
            {formErrors[inputType] && (
              <p className="errorBox">{formErrors[inputType]}</p>
            )}
          </div>
      );
}