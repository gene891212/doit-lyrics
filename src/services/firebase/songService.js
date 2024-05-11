import db from './index'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where
} from 'firebase/firestore'

// Create a new song document with lyrics
export async function createSong(songData) {
  try {
    const docSnap = await addDoc(collection(db, 'songs'), songData)
    return { id: docSnap.id }
  } catch (error) {
    console.error('Error creating song:', error)
    throw error
  }
}

// Read all songs
export async function getAllSongs() {
  try {
    const snapshot = await getDocs(collection(db, 'songs'))
    const songs = []
    snapshot.forEach((doc) => {
      const songData = { id: doc.id, ...doc.data() }
      songs.push(songData)
    })
    return songs
  } catch (error) {
    console.error('Error getting songs:', error)
    throw error
  }
}

// Read a song document by ID
export async function getSongById(songId) {
  try {
    const docSnap = await getDoc(doc(db, 'songs', songId))
    if (docSnap.exists()) {
      const songData = docSnap.data()
      return songData
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting song:', error)
    throw error
  }
}

export async function getSongByYoutubeId(youtubeId) {
  try {
    const q = query(collection(db, 'songs'), where('youtubeId', '==', youtubeId))
    const snapshot = await getDocs(q)
    const songData = []
    snapshot.forEach((doc) => {
      songData.push({ id: doc.id, ...doc.data() })
    })
    if (songData.length === 0) {
      return null
    } else {
      return songData[0]
    }
  } catch (error) {
    console.error('Error getting lyrics:', error)
    throw error
  }
}

// Update a song document by ID
export async function updateSongById(songId, updatedData) {
  try {
    await updateDoc(doc(db, 'songs', songId), updatedData)
    return true
  } catch (error) {
    console.error('Error updating song:', error)
    throw error
  }
}

// Delete a song document by ID
export async function deleteSongById(songId) {
  try {
    await deleteDoc(doc(db, 'songs', songId))
    return true
  } catch (error) {
    console.error('Error deleting song:', error)
    throw error
  }
}
