package com.silassefas.BarberShop.service.query.impl;

import com.silassefas.BarberShop.entity.ClientEntity;
import com.silassefas.BarberShop.exception.NotFoundException;
import com.silassefas.BarberShop.repository.IClientRepository;
import com.silassefas.BarberShop.service.query.IClientQueryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class ClienteQueryServiceImpl implements IClientQueryService {

    private final IClientRepository repository;

    @Override
    public ClientEntity findById(long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Não Foi Encontrado o Cliente de ID: " + id));
    }

    @Override
    public List<ClientEntity> list() {
        return repository.findAll();
    }

    @Override
    public void verifyPhone(String phone) {
        if(repository.existsByPhone(phone)){
            throw new NotFoundException("Já existe um cliente cadastrado com o telefone: " + phone);
        }
    }

    @Override
    public void verifyPhone(long id, String phone) {
        var optional = repository.findByPhone(phone);
        if(optional.isPresent() && !Objects.equals(optional.get().getPhone(), phone)){
            throw new NotFoundException("O telefone: " + phone + " já está cadastrado para outro cliente");
        }
    }

    @Override
    public void verifyEmail(String email) {
        if(repository.existsByEmail(email)){
            throw new NotFoundException("Já existe um cliente cadastrado com o e-mail: " + email);
        }
    }

    @Override
    public void verifyEmail(long id, String email) {
        var optional = repository.findByEmail(email);
        if(optional.isPresent() && !Objects.equals(optional.get().getEmail(), email)){
            throw new NotFoundException("O E-mail: " + email + " já está cadastrado para outro cliente");
        }
    }
}
