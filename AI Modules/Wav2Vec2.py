import pyaudio
import numpy as np

p = pyaudio.PyAudio()


sample_rate = 16000
chunk_size = 1024 
threshold = 100   


warning_counter = 0


stream = p.open(format=pyaudio.paInt16,
                channels=1,
                rate=sample_rate,
                input=True,
                frames_per_buffer=chunk_size)

print("🎤 Listening for noise... (Speak loudly to trigger a warning)")


def detect_noise(audio_chunk):
    rms = np.sqrt(np.mean(np.square(audio_chunk))) 
    print(f"RMS: {rms}") 
    return rms > threshold 


try:
    while True:
        
        audio_chunk = np.frombuffer(stream.read(chunk_size, exception_on_overflow=False), dtype=np.int16)

       
        if detect_noise(audio_chunk):
            warning_counter += 1
            print(f"⚠️ Noise Detected! Warning #{warning_counter}")

            
            if warning_counter >= 3:
                print("🚨 Paper Cancelled Due to Noise!")
                break

except KeyboardInterrupt:
    print("\n🎧 Stopping...")

finally:
    
    stream.stop_stream()
    stream.close()
    p.terminate()
    print("🎤 Audio stream closed.")
