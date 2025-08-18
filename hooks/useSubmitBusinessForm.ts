import z from "zod"

export const submitBusinessFormSchema = z.object({
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  phoneNumber: z.e164().length(12),
  corporationNumber: z.string().max(9)
})

export type submitBusinessFormSchemaType = z.infer<typeof submitBusinessFormSchema>;

export const useSubmitBusinessForm = async (formValues: submitBusinessFormSchemaType) => {
    const response = await fetch(
    "https://fe-hometask-api.qa.vault.tryvault.com/profile-details",
    {
        method: 'POST',
        body: JSON.stringify(formValues),
    }
    )
    // TODO: return message if 400
    // TODO: test hook
    return await response.json()
}
