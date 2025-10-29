import { DragAndDropUploader } from "@/components/ui/dashboard/home/DragAndDropUploader"

export const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Procesar Dataset</h1>
      <DragAndDropUploader />
    </div>
  )
}
