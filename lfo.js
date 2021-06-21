const lfo = (freq,phase=0,amp=1) => {
    const start_timestamp = Date.now()
    return ()=>{
        const now = Date.now()
        const value = Math.sin(freq*((start_timestamp - now)/1000 + phase))*amp
        return value
    }
}
