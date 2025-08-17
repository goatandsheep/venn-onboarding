export const useSubmitBusinessForm = async (formValues): Promise<> => {
    const response = await fetch(
    `https://fehometask-api.qa.vault.tryvault.com/corporation-number/${corporationNumber}`,
    {
        method: 'POST',
        body: JSON.stringify(formValues),
    }
    )
    // TODO: return message if 400
    return await response.json() as Promise<>
}
