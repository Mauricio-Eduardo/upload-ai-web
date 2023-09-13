import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button"
import { Separator } from './components/ui/separator'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Slider } from './components/ui/slider'

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>

      {/* HEADER */}
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💚 no NLW da Rocketseat</span>

          <Separator orientation='vertical' className='h-6'/>
          <Button variant={"outline"}>
            <Github className='w-4 h-4 mr-2'/>
            GitHub
          </Button>
        </div>
      </div>

      {/* MAIN */}
      <main className='flex-1 p-6 flex gap-6'>

        {/* TEXT AREAS */}
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>

            {/* INSERT PROMPT */}
            <Textarea 
              className='resize-none p-4 leading-relaxed'
              placeholder='Inclua o prompt para a IA...'
            />

            {/* RESULT */}
            <Textarea 
              className='resize-none p-4 leading-relaxed' 
              placeholder='Resultado gerado pela IA' 
              readOnly
            />
          </div>

          <p className='text-sm text-muted-foreground'>Lembre-se: você pode utilizar a variável <code className='text-green-500'>{'transcription'}</code> para adicionar o conteúdo da transcrição do vídeo selecionado!</p>
        </div>

        {/* SIDEBAR */}
        <aside className='w-80 space-y-6'>

          {/* PROMPT DE TRANSCRIÇÃO */}
          <form className="space-y-6">
            <label 
              htmlFor="video"
              className='border border-dashed flex flex-col gap-2 text-sm 
                        rounded-md aspect-video cursor-pointer items-center 
                        justify-center text-muted-foreground hover:bg-primary/5'
              >
              <FileVideo className="w-4 h-4"/>
              Selecione um vídeo
            </label>

            <input type="file" id='video' accept='video/mp4' className='sr-only'/>

            <Separator/>

            <div className='space-y-2'>
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea 
                id='transcription_prompt' 
                className='h-20 leading-relaxed resize-none'
                placeholder='Inclua palvaras-chave mencionadas no vídeo separadas por vírgula'
              />
            </div>

            <Button type='submit' className='w-full'>
              Carregar vídeo
              <Upload className='w-4 h-4 ml-2'/>
            </Button>

          </form>
          
          {/* TEMPERATURA */}
          <form className="space-y-6">

          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt"/>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='title'>Título do Youtube</SelectItem>
                  <SelectItem value='description'>Descrição do Youtube</SelectItem>
                </SelectContent>
              </Select>

              <span className='block text-xs text-mute-foreground italic'>
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-Turbo 16k</SelectItem>
                  <SelectItem value='gpt4'>GPT 4.0</SelectItem>
                </SelectContent>
              </Select>

              <span className='block text-xs text-mute-foreground italic'>
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator/>

            <div className='space-y-2'>
              <Label>Temperatura</Label> 
              <Slider
                min={0}
                max={1}
                step={0.1}
              />
              <span className='block text-xs text-mute-foreground italic'>
                Valores mais altos deixam o resultado mais criativo e com possíveis erros
              </span>
            </div>

            <Button type="submit">
              Executar
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>

          </form>

        </aside>      

      </main>

    </div>
  )
}