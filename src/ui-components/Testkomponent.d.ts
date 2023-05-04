/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MarketingPricingProps } from "./MarketingPricing";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestkomponentOverridesProps = {
    Testkomponent?: PrimitiveOverrideProps<ViewProps>;
    MarketingPricing?: MarketingPricingProps;
} & EscapeHatchProps;
export declare type TestkomponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TestkomponentOverridesProps | undefined | null;
}>;
export default function Testkomponent(props: TestkomponentProps): React.ReactElement;
