import {FormErrorList} from "./form-error-list";

interface FormTextareaProps {
    label: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
    errors?: string[]
}

export function FormTextarea({
                              label = '',
                              placeholder = '',
                              value = '',
                              onChange = (value: string) => value,
                              errors
                          }: FormTextareaProps) {
    return (
        <div className="mb-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{label}</label>
            <textarea  className="bg-body-secondary form-control rounded-1" placeholder={placeholder}
                      onChange={e => onChange(e.target.value)}
                      value={value}
                      required
                      id="exampleFormControlTextarea1" rows={7}/>
            <FormErrorList errors={errors}/>
        </div>
    )
}
