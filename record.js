// const { createFFmpeg } = FFmpeg;
// const ffmpeg = createFFmpeg({
//   log: true
// });

// const transcode = async (webcamData) => {
//   // const message = document.getElementById('message');
//   // const name = 'record.webm';
//   // await ffmpeg.load();
//   // message.innerHTML = 'Start transcoding';
//   // console.log(ffmpeg)
//   // ffmpeg.FS('writeFile', name, webcamData);
//   // await ffmpeg.run('-i', name, 'output.mp4');
//   // // await ffmpeg.FS('transcode',name,  'output.mp4');
//   // message.innerHTML = 'Complete transcoding';
//   // const data = ffmpeg.FS('readFile','output.mp4');

//   // const video = document.getElementById('output-video');
//   // video.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
//   // dl.href = video.src;
//   // dl.innerHTML = "download mp4"
//   }
// setTimeout(() => {
//   fn().then(async ({url, blob})=>{
//       transcode(new Uint8Array(await (blob).arrayBuffer()));
//   })
  
// }, 1000);

//   function fn() {
//   var recordedChunks = [];

//   var time = 0;
//   var canvas = document.getElementById("mandelbrot");

//   return new Promise(function (res, rej) {

//       var stream = canvas.captureStream(24);
//     const myVideo = document.getElementById('myVideo')
//       mediaRecorder = new MediaRecorder(stream, {
//           mimeType: "video/webm",
//           // mimeType : 'video/mp4',
//           videoBitsPerSecond: 100000000
//       });

//       mediaRecorder.start(time);

//       mediaRecorder.ondataavailable = function (e) {
//           recordedChunks.push(e.data);
//           // for demo, removed stop() call to capture more than one frame
//       }

//       mediaRecorder.onstop = function (event) {
//           var blob = new Blob(recordedChunks, {
//               "type": "video/webm;codecs=H264"
//           });
//           var url = URL.createObjectURL(blob);
//           res({url, blob}); // resolve both blob and url in an object

//           myVideo.src = url;
//           // removed data url conversion for brevity
//       }
//       document.getElementById('stoprecord').onclick = ()=>{
//           mediaRecorder.stop()
//       }
//       // setTimeout(()=>{
//       //   mediaRecorder.stop()
//       // },10*1000)
//   });
// }