package com.sms.SMS.mapper;

import com.sms.SMS.dto.StudentDto;
import com.sms.SMS.entity.Student;

public class StudentMapper {
    public static Student mapToStudent(StudentDto studentDto){
        return new Student(
                studentDto.getId(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(),
                studentDto.getEnglish(),
                studentDto.getHindi(),
                studentDto.getMaths(),
                studentDto.getTotal()
        );
    }

    public static StudentDto mapTOStudentDto(Student student){
        return new StudentDto(
                student.getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getEnglish(),
                student.getMaths(),
                student.getHindi(),
                student.getTotal()
        );
    }
}
