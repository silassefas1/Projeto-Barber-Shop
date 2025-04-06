package com.silassefas.BarberShop.controller;

import com.silassefas.BarberShop.controller.request.SaveClientRequest;
import com.silassefas.BarberShop.controller.request.UpdateClientRequest;
import com.silassefas.BarberShop.controller.response.ClientDetailResponse;
import com.silassefas.BarberShop.controller.response.ListClientResponse;
import com.silassefas.BarberShop.controller.response.SaveClientResponse;
import com.silassefas.BarberShop.controller.response.UpdateClientResponse;
import com.silassefas.BarberShop.mapper.IClientMapper;
import com.silassefas.BarberShop.service.IClientService;
import com.silassefas.BarberShop.service.query.IClientQueryService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("clients")
@AllArgsConstructor
public class ClientController {

    private final IClientService service;
    private final IClientQueryService queryService;
    private final IClientMapper mapper;

    @PostMapping
    @ResponseStatus(CREATED)
    SaveClientResponse save(@RequestBody @Valid final SaveClientRequest request){
        var entity = mapper.toEntity(request);
        service.save(entity);
        return mapper.toSaveResponse(entity);
    }

    // 🔥 Novo endpoint para salvar vários clientes de uma vez
    @PostMapping("/bulk")
    @ResponseStatus(CREATED)
    List<SaveClientResponse> saveBulk(@RequestBody @Valid final List<SaveClientRequest> requests) {
        return requests.stream().map(request -> {
            var entity = mapper.toEntity(request);
            service.save(entity);
            return mapper.toSaveResponse(entity);
        }).toList();
    }

    @PutMapping("{id}")
    UpdateClientResponse update(@PathVariable final long id, @RequestBody @Valid final UpdateClientRequest request){
        var entity = mapper.toEntity(id, request);
        service.update(entity);
        return mapper.toUpdateResponse(entity);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(NO_CONTENT)
    void delete(@PathVariable final long id){
        service.delete(id);
    }

    @GetMapping("{id}")
    ClientDetailResponse findById(@PathVariable final long id){
        var entity = queryService.findById(id);
        return mapper.toDetailResponse(entity);
    }

    @GetMapping
    List<ListClientResponse> list(){
        var entities = queryService.list();
        return mapper.toListResponse(entities);
    }
}
