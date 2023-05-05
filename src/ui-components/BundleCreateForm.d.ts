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
export declare type BundleCreateFormInputValues = {
    name?: string;
    size?: string;
    cost?: number;
};
export declare type BundleCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BundleCreateFormOverridesProps = {
    BundleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BundleCreateFormProps = React.PropsWithChildren<{
    overrides?: BundleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BundleCreateFormInputValues) => BundleCreateFormInputValues;
    onSuccess?: (fields: BundleCreateFormInputValues) => void;
    onError?: (fields: BundleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BundleCreateFormInputValues) => BundleCreateFormInputValues;
    onValidate?: BundleCreateFormValidationValues;
} & React.CSSProperties>;
export default function BundleCreateForm(props: BundleCreateFormProps): React.ReactElement;
