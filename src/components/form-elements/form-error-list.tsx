import React from 'react';

export type ValidationErrors = Array<string>;

type FormErrorProps = {
    errors?: ValidationErrors,
}

export function FormErrorList({errors = []}: FormErrorProps) {


    return (
        <div className="invalid-feedback">
            {
                errors && errors.map(error => <span className='error' key={error}>{error}</span>)
            }
        </div>
    );
}
