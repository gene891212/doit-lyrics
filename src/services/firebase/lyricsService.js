import db from './index'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore'

export async function createLyrics(lyricsData) {
  try {
    const docSnap = await addDoc(collection(db, 'lyrics'), lyricsData)
    return { id: docSnap.id }
  } catch (error) {
    console.error('Error creating lyrics:', error)
    throw error
  }
}

export async function getLyricsById(lyricsId) {
  try {
    const docSnap = await getDoc(doc(db, 'lyrics', lyricsId))
    if (docSnap.exists()) {
      const lyricsData = docSnap.data()
      return { id: lyricsId, ...lyricsData }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting lyrics:', error)
    throw error
  }
}

export async function getAllLyricsByYoutubeId(youtubeId) {
  try {
    const q = query(collection(db, 'lyrics'), where('youtubeId', '==', youtubeId))
    const snapshot = await getDocs(q)
    const lyrics = []
    snapshot.forEach((doc) => {
      lyrics.push({ id: doc.id, ...doc.data() })
    })
    return lyrics
  } catch (error) {
    console.error('Error getting lyrics:', error)
    throw error
  }
}

export async function updateLyricsById(lyricsId, updatedData) {
  try {
    await updateDoc(doc(db, 'lyrics', lyricsId), updatedData)
    return 'Lyrics updated successfully'
  } catch (error) {
    console.error('Error updating lyrics:', error)
    throw error
  }
}

export async function deleteLyricsById(lyricsId) {
  try {
    await deleteDoc(doc(db, 'lyrics', lyricsId))
    return 'Lyrics deleted successfully'
  } catch (error) {
    console.error('Error deleting lyrics:', error)
    throw error
  }
}
