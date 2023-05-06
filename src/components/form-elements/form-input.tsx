import {FormErrorList} from "./form-error-list";

interface FormInputProps {
    label: string,
    type?: 'text' | 'email',
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
    errors?: string[]
}

export function FormInput({
                              label = '',
                              type = 'text',
                              placeholder = '',
                              value = '',
                              onChange = (value: string) => value,
                              errors
                          }: FormInputProps) {
    return (
        <div className="mb-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">{label}</label>
            <input type={type} className="bg-body-secondary form-control rounded-1"
                   onChange={e => {
                       onChange(e.target.value)
                   }}
                   value={value}
                   required
                   placeholder={placeholder}/>
            <FormErrorList errors={errors}/>
        </div>
    )
}
