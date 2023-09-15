package com.sms.SMS.controller;

import com.sms.SMS.dto.StudentDto;
//import com.sms.SMS.entity.Student;
// import com.sms.SMS.entity.Student;
import com.sms.SMS.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/students")
public class StudentController {

    private StudentService studentService;

    @PostMapping()
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
        StudentDto createStudent = studentService.createStudent(studentDto);
        return new ResponseEntity<>(createStudent, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentDto> findStudentById(@PathVariable("id") Long studentId){
        StudentDto getStudent = studentService.findStudentById(studentId);
        return ResponseEntity.ok(getStudent);
    }

    @GetMapping()
    public ResponseEntity<List<StudentDto>> findALlStudents(){
        List<StudentDto> allStudents = studentService.findAllStudent();
        return ResponseEntity.ok(allStudents);
    }

    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long studentId,@RequestBody StudentDto studentDto){
        StudentDto updateStudent = studentService.updateStudent(studentId,studentDto);
        return  ResponseEntity.ok(updateStudent);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId){
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Entry with Id : "+ studentId+" deleted Successfully");
    }
}
