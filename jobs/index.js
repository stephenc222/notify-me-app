const Queue = require('bull')
const myFirstQueue = Queue('first-notify-me-queue')

let count = 0

const doSomething = async (data) => {
  console.log('doSomething', {data})
  return { jack: 10 }
}

// consuming a job
myFirstQueue.process(async (job) => {
  return doSomething(job)
})

// listening to a job
myFirstQueue.on('completed', (job, result) => {
  //console.log(`Job completed with result ${result}`)
  console.log('job #:', ++count)
})

// producing a job
myFirstQueue.add({ foo: 'bar' },
  {
    repeat: {
      every: 10000,
      limit: 100
    }
  })
