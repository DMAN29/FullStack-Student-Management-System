package com.sms.SMS.service;

import com.sms.SMS.dto.StudentDto;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    StudentDto findStudentById(Long studentId);
    List<StudentDto> findAllStudent();
    StudentDto updateStudent(Long studentId, StudentDto updatedStudent);
    void deleteStudent(Long studentId);
}
