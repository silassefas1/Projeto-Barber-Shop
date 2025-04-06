package com.silassefas.BarberShop.mapper;

import com.silassefas.BarberShop.controller.request.SaveClientRequest;
import com.silassefas.BarberShop.controller.request.UpdateClientRequest;
import com.silassefas.BarberShop.controller.response.ClientDetailResponse;
import com.silassefas.BarberShop.controller.response.ListClientResponse;
import com.silassefas.BarberShop.controller.response.SaveClientResponse;
import com.silassefas.BarberShop.controller.response.UpdateClientResponse;
import com.silassefas.BarberShop.entity.ClientEntity;
import jakarta.validation.Valid;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

import static org.mapstruct.MappingConstants.ComponentModel.SPRING;

@Mapper(componentModel = SPRING)
public interface IClientMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "schedules", ignore = true)
    ClientEntity toEntity(final SaveClientRequest request);

    SaveClientResponse toSaveResponse(final ClientEntity entity);

    @Mapping(target = "schedules", ignore = true)
    ClientEntity toEntity(final long id, final UpdateClientRequest request);

    UpdateClientResponse toUpdateResponse(final ClientEntity entity);

    ClientDetailResponse toDetailResponse(final ClientEntity entity);

    List<ListClientResponse> toListResponse(final List<ClientEntity> entities);

}