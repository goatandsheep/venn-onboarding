
type corporationNumberResponseBad = {
    message: string,
    valid: boolean
}
type corporationNumberResponseGood = {
    corporationNumber: string,
    valid: boolean
}
export type corporationNumberResponse = corporationNumberResponseGood | corporationNumberResponseBad

export const getCorporationNumberValidation = async (corporationNumber: string): Promise<corporationNumberResponse> => {
    console.log('corporation string', corporationNumber);
    const response = await fetch(
    `https://fe-hometask-api.qa.vault.tryvault.com/corporation-number/${corporationNumber}`,
    )
    return await response.json() as Promise<corporationNumberResponse>
}
