/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bundle } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BundleUpdateFormInputValues = {
    name?: string;
    size?: string;
    cost?: number;
    image?: string;
};
export declare type BundleUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    size?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BundleUpdateFormOverridesProps = {
    BundleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    size?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BundleUpdateFormProps = React.PropsWithChildren<{
    overrides?: BundleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bundle?: Bundle;
    onSubmit?: (fields: BundleUpdateFormInputValues) => BundleUpdateFormInputValues;
    onSuccess?: (fields: BundleUpdateFormInputValues) => void;
    onError?: (fields: BundleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BundleUpdateFormInputValues) => BundleUpdateFormInputValues;
    onValidate?: BundleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BundleUpdateForm(props: BundleUpdateFormProps): React.ReactElement;
