package com.sms.SMS.repository;

import com.sms.SMS.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentRepository extends JpaRepository<Student,Long> {
}
