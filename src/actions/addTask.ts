'use server'

export const addData = async (formData: FormData) => {
  // Create new taskObject and add to database from here
  const data = formData.getAll('data');
  console.log(data)
}