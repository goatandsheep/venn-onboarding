import z from "zod"

export const submitBusinessFormSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  phone: z.e164().length(12),
  corporationNumber: z.string().max(9)
})
// TODO: corporationNumber: z.string().regex(/^\d%/)

export type submitBusinessFormSchemaType = z.infer<typeof submitBusinessFormSchema>;

export const submitBusinessForm = async (formValues: submitBusinessFormSchemaType) => {
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
