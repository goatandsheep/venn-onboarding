import { describe, expect, test } from '@jest/globals';
import { useGetCorporationNumberValidation, corporationNumberResponse } from './useGetCorporationNumberValidation';

const InvalidCorporationNumberError = "Invalid corporation number";

const testNumbers: [string, corporationNumberResponse][] = [
    ["4", { corporationNumber: "4", valid: true}],
    ["826417395", { corporationNumber: "826417395", valid: true}],
    ["158739264", { corporationNumber: "158739264", valid: true}],
    ["123456789", { corporationNumber: "123456789", valid: true}],
    ["591863427", { corporationNumber: "591863427", valid: true}],
    ["312574689", { corporationNumber: "312574689", valid: true}],
    ["265398741", { corporationNumber: "265398741", valid: true}],
    ["762354918", { corporationNumber: "762354918", valid: true}],
    ["468721395", { corporationNumber: "468721395", valid: true}],
    ["624719583", { corporationNumber: "624719583", valid: true}],
    ["-265398741", { valid: false, message: InvalidCorporationNumberError}],
    ["7623549.18", { valid: false, message: InvalidCorporationNumberError}],
    ["4687213955", { valid: false, message: InvalidCorporationNumberError}],
    ["62471958334543", { valid: false, message: InvalidCorporationNumberError}],
];

describe('add utility', () => {
  test.each(testNumbers)('checks corporation number %i to get %s', async (a, b) => {
    const result = await useGetCorporationNumberValidation(a)
    expect(result).toBe(b);
  });
});
