import { getData } from './utils/fetchClient';
import { User } from './types/User';
import { Post } from './types/Post';
import { Album } from './types/Album';

export const getUsers = () => getData<User[]>('users');
export const getPosts = () => getData<Post[]>('posts');
export const getAlbums = () => getData<Album[]>('albums');
