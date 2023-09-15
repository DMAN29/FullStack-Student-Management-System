package com.sms.SMS.service.impl;

import com.sms.SMS.dto.StudentDto;
import com.sms.SMS.entity.Student;
import com.sms.SMS.exception.ResourceNotFoundException;
import com.sms.SMS.mapper.StudentMapper;
import com.sms.SMS.repository.StudentRepository;
import com.sms.SMS.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = StudentMapper.mapToStudent(studentDto);
        return StudentMapper.mapTOStudentDto(studentRepository.save(student));
    }

    @Override
    public StudentDto findStudentById(Long studentId) {
        Student findStudent = studentRepository.findById(studentId).orElseThrow(()-> new ResourceNotFoundException("Data of Student with id"+studentId+" not found in system"));
        return StudentMapper.mapTOStudentDto(findStudent);
    }

    @Override
    public List<StudentDto> findAllStudent() {
        List<Student> allStudents = studentRepository.findAll();
        return allStudents.stream().map((student) -> StudentMapper.mapTOStudentDto(student)).collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
        Student student = studentRepository.findById(studentId).orElseThrow(()-> new ResourceNotFoundException("Data of Student with id"+studentId+" not found in system"));
        student.setId(updatedStudent.getId());
        student.setEmail(updatedStudent.getEmail());
        student.setHindi(updatedStudent.getHindi());
        student.setEnglish(updatedStudent.getEnglish());
        student.setMaths(updatedStudent.getMaths());
        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setTotal(updatedStudent.getTotal());

        studentRepository.save(student);
        return StudentMapper.mapTOStudentDto(student);
    }

    @Override
    public void deleteStudent(Long studentId) {
        Student deleteStudent = studentRepository.findById(studentId).orElseThrow(()-> new ResourceNotFoundException("Data of Student with id"+studentId+" not found in system"));
        studentRepository.deleteById(studentId);
    }
}
