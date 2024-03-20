/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '@src/modules/shared/utils/supabase'
import { message } from 'antd'
import { clearTokens } from '../utils/token'
import { PATH } from '@src/modules/auth/routes/paths'
 
export const signin = createAsyncThunk('auth/signin', async (_, { rejectWithValue }) => {
  const location = window.location
  try {
    const response = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}${PATH.HOME}`,
      }
    })
    if (!response.error) {
      return response.data
    }

    throw new Error(response?.error?.message)
  } catch (err: any) {
    return rejectWithValue(err)
  }
})
 // sign in with github
export const login = createAsyncThunk('auth/login', async (_, { rejectWithValue }) => {
  try {
    const response = await supabase.auth.getUser()
    if (!response.error) {
      return response.data
    }

    throw new Error(response?.error?.message)
  } catch (err: any) {
    return rejectWithValue(err)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await supabase.auth.signOut()
    if (!response.error) {
      message.success('Sign out successfuly')
      clearTokens()
    }
    return response
  } catch (err: any) {
    return rejectWithValue(err)
  }
})
