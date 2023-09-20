package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "Description")
@Getter
@Setter
@NoArgsConstructor
public class DescriptionEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    private String statement;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private ServiceEntity service;

    public DescriptionEntity(String statement) {
        this.statement = statement;
    }
}
