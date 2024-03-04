﻿using System.Collections.Generic;
using MoviesAPI.Entities;
using System;
using System.Threading.Tasks;

namespace MoviesAPI.Services
{
    public interface IRepository
    {
        void AddGenre(Genre genre);
        Task<List<Genre>> GetAllGenres();
        Genre GetGenreById(int id);
    }
}
