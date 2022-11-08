package com.example.bloodbank.Service;

public interface ICRUDService<T> {
	Iterable<T> getAll();
    T getById(Long id);
    T create(T entity);
    T update(T entity);
    void delete(Long entityId);
}
