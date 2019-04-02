package com.nea.projectcaerus.repositories;

import com.nea.projectcaerus.entity.Settings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingsRepository extends JpaRepository<Settings, Long> {
}
