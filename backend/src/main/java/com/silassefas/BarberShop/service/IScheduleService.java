package com.silassefas.BarberShop.service;

import com.silassefas.BarberShop.entity.ScheduleEntity;

public interface IScheduleService {

    ScheduleEntity save(final ScheduleEntity entity);

    void delete(final long id);
}
