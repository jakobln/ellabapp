/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EllabComponent2Props } from "./EllabComponent2";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EllabComponent2CollectionOverridesProps = {
    EllabComponent2Collection?: PrimitiveOverrideProps<CollectionProps>;
    EllabComponent2?: EllabComponent2Props;
} & EscapeHatchProps;
export declare type EllabComponent2CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => EllabComponent2Props;
} & {
    overrides?: EllabComponent2CollectionOverridesProps | undefined | null;
}>;
export default function EllabComponent2Collection(props: EllabComponent2CollectionProps): React.ReactElement;
