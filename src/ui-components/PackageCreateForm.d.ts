/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PackageCreateFormInputValues = {
    name?: string;
    size?: string;
    cost?: number;
};
export declare type PackageCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PackageCreateFormOverridesProps = {
    PackageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PackageCreateFormProps = React.PropsWithChildren<{
    overrides?: PackageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PackageCreateFormInputValues) => PackageCreateFormInputValues;
    onSuccess?: (fields: PackageCreateFormInputValues) => void;
    onError?: (fields: PackageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PackageCreateFormInputValues) => PackageCreateFormInputValues;
    onValidate?: PackageCreateFormValidationValues;
} & React.CSSProperties>;
export default function PackageCreateForm(props: PackageCreateFormProps): React.ReactElement;
