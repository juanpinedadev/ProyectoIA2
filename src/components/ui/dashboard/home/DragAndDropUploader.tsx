// import { useState } from "react"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

export const DragAndDropUploader = () => {
  return <div>HolaDragAndDrop</div>
  // const [file, setFile] = useState<File | null>(null)
  // const [data, setData] = useState<any[]>([])
  // const [trainSet, setTrainSet] = useState<any[]>([])
  // const [testSet, setTestSet] = useState<any[]>([])
  // const [error, setError] = useState<string | null>(null)

  // const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault()
  //   const droppedFile = e.dataTransfer.files[0]
  //   if (droppedFile) {
  //     setFile(droppedFile)
  //     parseFile(droppedFile)
  //   }
  // }

  // const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault()
  // }

  // const parseFile = (file: File) => {
  //   setError(null)
  //   Papa.parse(file, {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: (result) => {
  //       if (result.data.length === 0) {
  //         setError("El archivo está vacío o no tiene formato válido.")
  //         return
  //       }

  //       setData(result.data)
  //       detectPatterns(result.data)
  //     },
  //     error: () => setError("Error al procesar el archivo."),
  //   })
  // }

  // const detectPatterns = (rows: any[]) => {
  //   // Aquí podrías analizar columnas de entrada/salida
  //   const columns = Object.keys(rows[0])
  //   console.log("Columnas detectadas:", columns)

  //   // Dividir datos (70% - 30%)
  //   const trainSize = Math.floor(rows.length * 0.7)
  //   const shuffled = [...rows].sort(() => Math.random() - 0.5)
  //   setTrainSet(shuffled.slice(0, trainSize))
  //   setTestSet(shuffled.slice(trainSize))
  // }

  // const handleReset = () => {
  //   setFile(null)
  //   setData([])
  //   setTrainSet([])
  //   setTestSet([])
  //   setError(null)
  // }

  // return (
  //   <Card className="w-full max-w-xl mx-auto mt-10">
  //     <CardHeader>
  //       <CardTitle>📂 Drag and Drop Uploader</CardTitle>
  //     </CardHeader>
  //     <CardContent>
  //       <div
  //         onDrop={handleDrop}
  //         onDragOver={handleDragOver}
  //         className="border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer hover:bg-muted transition"
  //       >
  //         {file ? (
  //           <p className="text-sm">Archivo cargado: <strong>{file.name}</strong></p>
  //         ) : (
  //           <p className="text-muted-foreground">Arrastra tu dataset aquí o haz clic para seleccionar</p>
  //         )}
  //       </div>

  //       {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

  //       {data.length > 0 && (
  //         <div className="mt-4 space-y-2">
  //           <p>✅ Registros totales: {data.length}</p>
  //           <p>🧠 Entrenamiento: {trainSet.length}</p>
  //           <p>🧪 Prueba: {testSet.length}</p>
  //           <Button onClick={handleReset} variant="secondary" className="mt-2">
  //             Reiniciar
  //           </Button>
  //         </div>
  //       )}
  //     </CardContent>
  //   </Card>
  // )
}
