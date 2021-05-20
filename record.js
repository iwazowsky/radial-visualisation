const { createFFmpeg } = FFmpeg;
const ffmpeg = createFFmpeg({
  log: true
});

const transcode = async (webcamData) => {
  const message = document.getElementById('message');
  const name = 'record.webm';
  await ffmpeg.load();
  message.innerHTML = 'Start transcoding';
  await ffmpeg.write(name, webcamData);
  await ffmpeg.transcode(name,  'output.mp4');
  message.innerHTML = 'Complete transcoding';
  const data = ffmpeg.read('output.mp4');

  const video = document.getElementById('output-video');
  video.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
  dl.href = video.src;
  dl.innerHTML = "download mp4"
}

fn().then(async ({url, blob})=>{
    transcode(new Uint8Array(await (blob).arrayBuffer()));
})

function fn() {
var recordedChunks = [];

var time = 0;

return new Promise(function (res, rej) {
setTimeout(()=>{

  var stream = canvas.captureStream(24);

  mediaRecorder = new MediaRecorder(stream, {
      mimeType: "video/webm"
  });

  mediaRecorder.start(time);

  mediaRecorder.ondataavailable = function (e) {
      recordedChunks.push(e.data);
      // for demo, removed stop() call to capture more than one frame
  }

  mediaRecorder.onstop = function (event) {
      var blob = new Blob(recordedChunks, {
          "type": "video/webm"
      });
      var url = URL.createObjectURL(blob);
      res({url, blob}); // resolve both blob and url in an object

      myVideo.src = url;
      // removed data url conversion for brevity
  }
  setTimeout(()=>mediaRecorder.stop(),12*1000)
},100)
});
}