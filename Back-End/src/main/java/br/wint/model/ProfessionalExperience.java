package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity(name = "professional_experience")
public class ProfessionalExperience {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Setter
    private String company;

    @Getter
    @Setter
    private String role;

    @Getter
    @Setter
    private String place;

    @Getter
    @Setter
    private Date data;

    @Getter
    @Setter
    private String tag;

    @Getter
    @Setter
    private String description;

    @Setter
    @ManyToOne
    @JoinColumn(name = "userExperiences_id")
    private User userExperiences;

    @Override
    public String toString() {
        return "ProfessionalExperience{" +
                "id=" + id +
                ", company='" + company + '\'' +
                ", role='" + role + '\'' +
                ", place='" + place + '\'' +
                ", data=" + data +
                ", tag='" + tag + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
