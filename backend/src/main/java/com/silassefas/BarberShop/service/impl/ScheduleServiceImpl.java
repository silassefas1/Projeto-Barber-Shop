package com.silassefas.BarberShop.service.impl;

import com.silassefas.BarberShop.entity.ScheduleEntity;
import com.silassefas.BarberShop.repository.IScheduleRepository;
import com.silassefas.BarberShop.service.IScheduleService;
import com.silassefas.BarberShop.service.query.IScheduleQueryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ScheduleServiceImpl implements IScheduleService {

    private final IScheduleRepository repository;
    private final IScheduleQueryService queryService;

    @Override
    public ScheduleEntity save(final ScheduleEntity entity) {
        queryService.verifyIfScheduleExists(entity.getStartAt(), entity.getEndAt());

        return repository.save(entity);
    }

    @Override
    public void delete(final long id) {
        queryService.findById(id);
        repository.deleteById(id);
    }
}
