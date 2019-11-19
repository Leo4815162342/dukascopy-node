declare const schema: {
    instrument: {
        type: string;
        enum: string[];
        required: boolean;
    };
    dates: {
        type: string;
        required: boolean;
        props: {
            from: {
                type: string;
                required: boolean;
            }[];
            to: {
                type: string;
                required: boolean;
            }[];
        };
    };
    timeframe: {
        type: string;
        enum: string[];
        required: boolean;
    };
    priceType: {
        type: string;
        enum: string[];
        required: boolean;
    };
    utcOffset: {
        type: string;
        integer: boolean;
        required: boolean;
    };
    volumes: {
        type: string;
        required: boolean;
    };
    ignoreFlats: {
        type: string;
        required: boolean;
    };
};
export { schema };
