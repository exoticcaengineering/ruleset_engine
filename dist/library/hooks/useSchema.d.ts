type CallError = {
    message: string;
    code: string;
};
declare const useSchema: (url: string) => {
    schemaData: RuleSchema[];
    isLoading: boolean;
    error: CallError | undefined;
};
export default useSchema;
