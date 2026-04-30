import { getRupiahCurrencyFormat } from "@/lib/utils";

export const formatValueInput = (name: string, value: string) => {
    if (name === 'price') return getRupiahCurrencyFormat(value);
    return value;
}