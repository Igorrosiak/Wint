package br.wint.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity(name = "portfolio")
public class Portfolio {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    @Getter
    @Setter
    @Size(max = 100)
    private String name;

    @Getter
    @Setter
    @Size(max = 355)
    private String description;

    @Getter
    @OneToMany(mappedBy = "portfolioFromPost")
    private List<Post> postsByPortofolio;

    @Setter
    @ManyToOne
    @JoinColumn(name = "userPortofolio_id")
    private User userPortfolio;

    @Override
    public String toString() {
        return "Portfolio{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", postsByPortofolio=" + postsByPortofolio +
                '}';
    }
}
