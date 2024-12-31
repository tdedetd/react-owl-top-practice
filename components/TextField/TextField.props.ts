import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputTypes = Extract<
  HTMLInputTypeAttribute,
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
>;

type TextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type TextFieldProps = ({ type: 'textarea' } & TextareaProps) | ({ type: InputTypes } & InputProps);
