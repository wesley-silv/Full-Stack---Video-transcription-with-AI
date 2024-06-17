import ffmpegStatic from 'ffmpeg-static'
import ffmpeg from 'fluent-ffmpeg'

export const createMP3 = () =>
  new Promise((resolve, reject) => {
    // Tell fluent-ffmpeg where it can find FFmpeg
    ffmpeg.setFfmpegPath(ffmpegStatic)

    // Run FFmpeg
    ffmpeg()
      // Input file
      .input('audio.mp4')

      // Audio bit rate
      .outputOption('-ab', '20k')

      // Output file
      .saveToFile('audio.mp3')

      .on('end', () => {
        console.log('Audio convertido com sucesso!')
        resolve()
      })

      // The callbakc that is run when FFmpeg exncountered an error.
      .on('error', error => {
        console.log(error)
        reject(error)
      })
  })
